import { ref } from 'vue';
import axios from 'axios';

export const currentUser = ref(localStorage.getItem("username") || "");
export const isAdmin = ref(false);

export const checkAdmin = async () => {
  const token = localStorage.getItem("access_token");
  if (!token) return;

  try {
    const { data } = await axios.get("/users/me", {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    isAdmin.value = data.userRole === 1;
    currentUser.value = data.username;
  } catch (error) {
    isAdmin.value = false;
  }
};

export const performLogout = (router) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("username");
  isAdmin.value = false;
  currentUser.value = "";
  router.push('/login'); 
};  