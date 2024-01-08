import { createContext, useContext } from "react";
import { adminListData } from "../data/adminList";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  return <AdminContext.Provider value={adminListData}>{children}</AdminContext.Provider>
};

const useAdminContext = () => {
  return useContext(AdminContext);
};

export { AdminProvider, AdminContext, useAdminContext };
