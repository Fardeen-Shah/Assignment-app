import { toast } from "react-toastify";

const getStoredApp = () => {
    const storeAppSTR = localStorage.getItem("appList");

    if (storeAppSTR) {
        const storeAppData = JSON.parse(storeAppSTR);
        return storeAppData;
    }
    else {
        return [];
    }
}

const addToStoreDB = (id) => {
    const storeAppData = getStoredApp();

    if (storeAppData.includes(id)) {
        toast.error("This id is already exist")
    }
    else {
        storeAppData.push(id)
        const data = JSON.stringify(storeAppData);
        localStorage.setItem("appList", data)
        toast.success("Downloading")
    }
}

const removeFromStoreDB = (id) => {
    const storeAppData = getStoredApp();
    const updatedData = storeAppData.filter(appId => appId !== id);

    localStorage.setItem("appList", JSON.stringify(updatedData));
    toast.info("Uninstalling");
}
export {getStoredApp ,addToStoreDB,removeFromStoreDB }