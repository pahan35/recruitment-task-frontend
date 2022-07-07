import { useMemo, useState } from 'react';
import cn from 'clsx';

import arrow from '../assets/svg/arrow.svg';
import { useToggle } from '../hooks/useToggle';

type AutosuggestionSelectProps = {
  characters: string[];
};

export function AutosuggestionSelect({
  characters,
}: AutosuggestionSelectProps): JSX.Element {
  const [isActive, toggle] = useToggle();
  const [search, setSearch] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );

  const filteredCharacters = useMemo(() => {
    if (!search) {
      return characters;
    }
    return characters.filter((character) =>
      character.match(new RegExp(search, 'i'))
    );
  }, [characters, search]);

  return (
    <div className="wrapper">
      <div className="select">
        <button
          className={cn('trigger', {
            ['trigger--active']: isActive,
          })}
          onClick={() => toggle()}
        >
          Find Rick & Morty Characters
          <img src={arrow} alt="chevron down icon" className="arrow" />
        </button>
        {isActive && (
          <div className="options">
            <input
              className="input"
              placeholder="Type to search..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <ul className="list">
              {filteredCharacters.map((character) => (
                <li
                  key={character}
                  className={cn('list__item', {
                    'list__item--selected': character === selectedCharacter,
                  })}
                  onClick={() =>
                    setSelectedCharacter((prevSelectedCharacter) =>
                      prevSelectedCharacter === character ? null : character
                    )
                  }
                >
                  {character}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
