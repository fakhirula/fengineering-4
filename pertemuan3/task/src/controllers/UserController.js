/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
import users from "../data/users.js";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */

const formatUser = async (title) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const formattedUsers = users.map((user) => {
            const formattedName = `${title} ${user.name}`;
            return { ...user, name: formattedName };
        });
        resolve(formattedUsers);
        }, 3000);
    });
};


/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = async (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const findUser = users.find((user) => user.name === name);
            resolve(findUser);
        }, 2000);
    });
};


/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = async (major) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filteredUsers = users.filter((user) => user.major === major);
            resolve(filteredUsers);
        }, 4000);
    });
};


/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */

export { formatUser, findByName, filterByMajor };
