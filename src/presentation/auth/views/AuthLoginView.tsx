// Layouts
import { AuthLayout } from '../layouts';

interface Props {
  title: string;
  handleSetText?: () => void;
}

export const AuthLoginView = ({ title, handleSetText }: Props) => {
  return (
    <AuthLayout
      title={ title }
    >
      { /* TODO: Page view building */ }
      <h1>title</h1>
    </AuthLayout>
  );
}
