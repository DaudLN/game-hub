import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import usePlatforms, {
  Platform,
  useSelectedPlatform
} from '../hooks/usePlatforms';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectPlatformId }: Props) => {
  const { data: platforms, error } = usePlatforms();
  const selectPlatform = useSelectedPlatform(selectPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectPlatform?.name
          ? 'Platform: ' + selectPlatform?.name
          : 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
            value={selectPlatform?.name}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
