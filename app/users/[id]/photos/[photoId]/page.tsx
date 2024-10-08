import React from "react";

interface Props {
	params: {
		photoId: number;
		id: number;
	};
}

const PhotoDetailsPage = ({ params: { id, photoId } }: Props) => {
	return <div>PhotoDetailsPage {id} {photoId}</div>;
};

export default PhotoDetailsPage;
