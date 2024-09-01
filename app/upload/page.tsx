"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

const UploadPage = () => {
	const [imagePublicId, setImagePublicId] = useState("");
	return (
		<>
			{imagePublicId && (
				<CldImage src={imagePublicId} width="300" height="200" alt="" />
			)}

			<CldUploadWidget
				uploadPreset="y4slwa2y"
				onSuccess={(result) => {
					setImagePublicId(
						typeof result.info != "string" && result.info?.public_id
							? result.info.public_id
							: ""
					);
				}}
				options={{
					sources: ["local"],
					multiple: false,
					cropping: true,
					styles: {
						palette: {
							window: "#ffffff",
							sourceBg: "#f4f4f5",
							windowBorder: "#90a0b3",
							tabIcon: "#000000",
							inactiveTabIcon: "#555a5f",
							menuIcons: "#555a5f",
							link: "#0433ff",
							action: "#339933",
							inProgress: "#0433ff",
							complete: "#339933",
							error: "#cc0000",
							textDark: "#000000",
							textLight: "#fcfffd",
						},
						fonts: {
							default: null,
							"sans-serif": {
								url: null,
								active: true,
							},
						},
					},
				}}
			>
				{({ open }) => {
					return (
						<button className="btn btn-primary" onClick={() => open()}>
							Upload
						</button>
					);
				}}
			</CldUploadWidget>
		</>
	);
};

export default UploadPage;
