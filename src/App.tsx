import { AutosuggestionSelect } from './components/AutosuggestionSelect';

import './App.css';

const CHARACTERS = ['Baby Wizard', 'Scroopy Noopers', 'Running Bird', 'Gotron'];

export default function App(): JSX.Element {
  return (
    <main>
      <AutosuggestionSelect characters={CHARACTERS} />
    </main>
  );
}
