import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const InputContainer = styled.div`
	position: absolute;
	height: 182px;
	left: 50.62%;
	right: 23.96%;
	top: 196px;

	input {
		display: none;
	}

	img {
		width: 100px;
		height: 100px;
	}
`;

import userdefault from "../../../assets/images/userdefault.png";

export const UserImageInput = ({ inputName, isRequired }) => {
	const [userImage, setUserImage] = useState({
		previousImg: userdefault,
		newImg: userdefault,
	});
	const handleChange = (event) => {
		const uploadedNewImg = userImage;
		uploadedNewImg.newImg = URL.createObjectURL(event.target.files[0]);
		console.log(event.target.files);
		setUserImage(uploadedNewImg.newImg);
		console.log(userImage);
	};

	return (
		<InputContainer>
			<label>
				{inputName}
				{isRequired ? "*" : ""}
				<img src={userImage.newImg} />
				<input
					className="file-input"
					onChange={(event) => handleChange(event)}
					type="file"
					id="img"
					name="img"
					accept="image/*"
				/>
			</label>

			<a>Upload</a>
		</InputContainer>
	);
};

UserImageInput.propTypes = {
	inputName: PropTypes.string,
	isRequired: PropTypes.bool,
};
