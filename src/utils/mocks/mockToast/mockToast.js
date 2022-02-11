import { render } from "@testing-library/react";
import React from "react";
import { ToastContainer } from "react-toastify";

export const mockToast = (component) => {
	return render(
		<div>
			<ToastContainer />
			{component}
		</div>
	);
};
