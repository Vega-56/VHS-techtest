import { render } from "@testing-library/react";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";

export const mockForm = (component) => {
	const methods = useForm({ mode: "onBlur" });
	return render(
		<div>
			<FormProvider {...methods}>{component}</FormProvider>
		</div>
	);
};
