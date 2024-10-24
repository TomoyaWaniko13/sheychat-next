import { SignIn, UserButton } from '@clerk/nextjs';

// 3. Ant-D Installation
// 7. Auth Components
export default function Home() {
  return (
    <div>
      <UserButton />
      <SignIn />
    </div>
  );
}
