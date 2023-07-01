'use client'
import { useRouter } from "next/navigation";
import "./styles.scss";

export default function ErrorPage() {
  const navigate = useRouter()
  navigate.push('/')
  return (
    <div className="ErrorPage">
    </div>
  );
}
