import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";
import Loading from "../Loading";

interface Props {
	searchParams: {
		sortOrder: string;
	};
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
	return (
		<>
			<h1>Users</h1>
			<Link href="/users/new" className="btn">New User</Link>
			<Suspense fallback={<Loading />}>
				<UserTable sortOrder={sortOrder} />
			</Suspense>
		</>
	);
};

export default UsersPage;
