export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitial = (fullName) => {
    if (!fullName) return "";
    const words = fullName.split(" ");
    const secondLetter = words.length > 1 ? words[1] : "";
    return (fullName.charAt(0) + secondLetter.charAt(0)).toUpperCase();
}