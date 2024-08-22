import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
	return (
		<div className="flex">
			<aside className="p-5 bg-slate-200 mr-5 text-black">Admin Side Bar</aside>
			<div>{children}</div>
		</div>
	);
};

export default AdminLayout;
