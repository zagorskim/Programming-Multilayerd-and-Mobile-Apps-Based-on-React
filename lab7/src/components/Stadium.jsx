import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import {Container, Box, Button, Stack, Input} from '@mui/material/'
import { stadiumState } from '../atoms/MatchAtom';

  const Stadium = () => {

    const [stadium, setStadium] = useRecoilState(stadiumState);

    return (
        <>
            <Stack direction='horizontal'>
                <Input variant='outlined' type='text' onChange={(e) => setStadium([e.target.value])}>Stadium</Input>
            </Stack>
        </>
    )
  }

  export default Stadium;