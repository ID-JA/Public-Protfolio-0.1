import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	// ! This State For toggle Button In Home Page
	const [isSideBarOpen, setIsOpenSideBar] = useState(false);

	const openSideBar = () => {
		setIsOpenSideBar(true);
	};

	const closeSideBar = () => {
		setIsOpenSideBar(false);
	};

	// ! This State For Modal Button In Projects Page
	const [idModal, setIdModal] = useState(0);

	const getModal = (value) => {
		setIdModal(value);
	};
	const closeModal = () => {
		setIdModal(0);
	};

	return (
		<AppContext.Provider
			value={{
				isSideBarOpen,
				openSideBar,
				closeSideBar,
				idModal,
				getModal,
				closeModal,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
