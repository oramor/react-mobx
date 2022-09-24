export interface ISendButtonProps {
    onClick: () => void;
}

export function SendButton({ onClick }: ISendButtonProps) {
    return (
        <button type="button" onClick={onClick}>
            {'Go test!'}
        </button>
    );
}
