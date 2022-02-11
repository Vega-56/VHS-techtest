import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Label } from "../styledComponents";
import iconAddImage from "../../../assets/formIcons/iconaddimg.svg";
import userdefault from "../../../assets/images/userdefault.png";
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	text-align: center;
	align-items: center;
`;

const Img = styled.img`
	max-width: 100px;
	max-height: 100px;
	min-height: 100px;
	min-height: 100px;
	border-radius: 50%;
`;

const Icon = styled.img`
	display: block;
	position: absolute;
	right: 0;
	top: 0;
`;

const Input = styled.input`
	display: none;
`;

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0 0.25rem 0;
`;

const ImgContainer = styled.div`
	position: relative;
`;
const UploadBtn = styled.label`
	font-weight: bold;
	color: rgba(240, 248, 255, 0.64);
`;

export const UserImageInput = ({ inputName, isRequired }) => {
	const [userImage, setUserImage] = useState({
		previousImg: userdefault,
		uploadedImg: userdefault,
	});

	const [isUploaded, setIsUploaded] = useState(false);

	// Uploaded Image Removal Handler
	const handleClick = () => {
		if (isUploaded) {
			setUserImage((prev) => {
				return { ...prev, uploadedImg: prev.previousImg };
			});

			// Fix opening of Image Upload After Removing
			setTimeout(() => {
				setIsUploaded(false);
			}, 100);
		}
	};

	// Image Upload Handler
	const handleChange = (event) => {
		if (!event.target.files || event.target.files.length <= 0 || isUploaded) {
			return;
		}
		const newImg = event.target.files
			? URL.createObjectURL(event.target.files[0])
			: null;
		setUserImage((prev) => {
			return { ...prev, uploadedImg: newImg };
		});
		setIsUploaded(true);
	};

	return (
		<InputContainer>
			<Label>
				{inputName}
				{isRequired ? "*" : ""}
			</Label>
			<FlexContainer>
				<ImgContainer>
					<Img src={userImage.uploadedImg} />
					<Icon src={iconAddImage} />
				</ImgContainer>

				<UploadBtn forHtml="img" onClick={handleClick}>
					{isUploaded ? "Remove" : "Upload"}
					<Input
						className="file-input"
						onChange={(event) => handleChange(event)}
						type="file"
						id="img"
						name="img"
						accept="image/*"
						disabled={isUploaded}
					/>
				</UploadBtn>
			</FlexContainer>
		</InputContainer>
	);
};

UserImageInput.propTypes = {
	inputName: PropTypes.string,
	isRequired: PropTypes.bool,
};
