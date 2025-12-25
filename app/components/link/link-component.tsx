import Link from "next/link";

export default function LinkComponent() {
    const id=100;
    return (
        <div >
            <h2> ## Link List ##</h2>
            <Link href="/acountSetting"> 1. Admin Acount Setting</Link><br/>
            <Link href={`/user/profile/${id}`}> 2. User Profile </Link>
        </div>
      );
  }
  