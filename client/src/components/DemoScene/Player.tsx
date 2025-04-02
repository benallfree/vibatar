import { ErrorBoundary } from 'react-error-boundary';
import { DefaultHumanoidModel, HumanoidState } from './DefaultHumanoidModel';
import { Vibatar } from './Vibatar';

interface PlayerProps {
  state: HumanoidState;
}

function FallbackComponent({ state }: { state: HumanoidState }) {
  return <DefaultHumanoidModel state={state} />;
}

export function Player({ state }: PlayerProps) {
  const username = new URLSearchParams(window.location.search).get('vibatar') || '';

  console.log('username', username);

  return username ? (
    <ErrorBoundary FallbackComponent={() => <FallbackComponent state={state} />}>
      <Vibatar state={state} username={username} />
    </ErrorBoundary>
  ) : (
    <DefaultHumanoidModel state={state} />
  );
}
