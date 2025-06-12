import dayjs from "dayjs";
dayjs.locale("pt-br");

/**
 * Mostra uma mensagem no console com formatação de cor.
 * Ideal para logs informativos.
 * @param args - Primeiro argumento é a mensagem principal. Demais argumentos são contextos/prefixos.
 */
export function LOG(...args: string[]): void {
	const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
	const Sendlog = `\x1b[36m[${now}]\x1b[0m ${
		args.length > 1
			? `\x1b[32m${args
					.map((t) => `[${t}]`)
					.slice(1)
					.join(" ")}\x1b[0m`
			: ""
	} \x1b[34m${args[0]}\x1b[0m`;
	console.log(Sendlog);
}

/**
 * Mostra uma mensagem de erro no console com formatação de cor.
 * Ideal para logs de falha ou exceções.
 * @param args - Primeiro argumento é a mensagem de erro. Demais argumentos são contextos/prefixos.
 */
export function LOG_ERR(...args: string[]): void {
	const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
	const error = args[0];
	const Sendlog =
		args.length > 1 ? args.slice(1).map((t) => `\x1b[33m[${t}]\x1b[0m`) : "";
	console.error(`\x1b[31m[ERROR - ${now}]\x1b[0m`, ...Sendlog, error);
}