export default function validateForm({ name, email, password, confirmPass }) {
	if (!name.trim()) {
		return 'Nome de usuário necessário';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Email obrigatório';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Endereço de email inválido';
	}
	if (!password) {
		return 'Senha requerida';
	} else if (password.length < 6) {
		return 'A senha precisa ter 6 caracteres ou mais';
	}

	if (!confirmPass) {
		return 'Confirmar senha é necessária';
	} else if (confirmPass !== password) {
		return 'As senhas não coincidem';
	}
	return null;
}
