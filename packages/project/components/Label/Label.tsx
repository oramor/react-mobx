interface LabelProps {
    content: string;
}

export function Label({ content }: LabelProps) {
    return <span>{content}</span>;
}
