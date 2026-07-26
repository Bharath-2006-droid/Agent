interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({ role, content }: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`max-w-[80%] rounded-2xl p-4 ${
        isUser
          ? "ml-auto bg-cyan-600"
          : "bg-white/10 border border-white/10"
      }`}
    >
      <p className="whitespace-pre-wrap">{content}</p>
    </div>
  );
}