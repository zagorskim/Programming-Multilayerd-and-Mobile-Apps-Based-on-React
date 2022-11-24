import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  import {Container, Box, Button, Stack, Input} from '@mui/material/'
  import { countryCodeState, teamNameSelector } from '../atoms/MatchAtom';
import { useEffect } from 'react';

  const Teams = () => {

    const [teams, setTeams] = useRecoilState(countryCodeState);
        useEffect(() => {
    }, [teams]);
    return (
        <>
            <Stack direction='horizontal' spacing="5">
                <Input  type='text' onChange={(e) => setTeams([e.target.value, teams[1]])}></Input>
                <Input  type='text' onChange={(e) => setTeams([teams[0], e.target.value])}></Input>
            </Stack>
        </>
    )
  }

  export default Teams;