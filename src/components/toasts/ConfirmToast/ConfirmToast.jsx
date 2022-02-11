import React from "react";
import { ToastContainer } from "react-toastify";
export const ConfirmToast = () => {
	return (
		<>
			<ToastContainer
				position="top-center"
				className="toastContainer"
				closeOnClick={false}
				draggable={false}
				limit={1}
				closeButton={false}
				autoClose={1000}
				hideProgressBar={false}
				style={{
					position: "fixed",
					width: "100%",
					margin: "0",
					padding: "1rem 0",
					background:
						"linear-gradient(89.97deg, rgba(39, 177, 138, 0.38) 0%, rgba(39, 177, 138, 0.68) 114.46%), #2A2E35",
					textAlign: "center",
					color: "#FFFFFF",
					fontFamily: "Montserrat",
					fontWeight: "bold",
					zIndex: "10",
				}}
			/>
		</>
	);
};
