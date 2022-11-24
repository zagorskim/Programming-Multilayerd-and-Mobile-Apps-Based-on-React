import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  import {Container, Box, Button, Stack} from '@mui/material/'
import Teams from './Teams';
import Stadium from './Stadium';
import Score from './Score';

  const Editor = () => {

    return (
        <>
            <Stack spacing={10}>
                <Teams/>
                <Stadium/>
                <Score/>    
            </Stack>
        </>
    )
  }

  export default Editor;