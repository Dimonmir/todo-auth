import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup
        .string()
        .email('Введите корректный email')
        .required('Почта обязательна'),
    password: yup
        .string()
        .min(6, 'Пароль должен быть состоять не менее чем из 6 симовлов')
        .required('Пароль обязателен'),
});

export const authTry = async (email: string, password: string) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("accessToken", userCredential.user.accessToken)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}