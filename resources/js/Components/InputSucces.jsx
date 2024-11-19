export default function InputSucces({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm text-green-600 dark:text-green-400 ' + className}>
            {message}
        </p>
    ) : null;
}
