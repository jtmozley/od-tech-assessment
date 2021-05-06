import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import shadow from './constants/shadow';
import colors from './constants/colors';
import scale from './constants/scale';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${colors.appBackground};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ViewArea = styled(motion.div)`
    width: 80%;
    height: 80%;
    background-color: ${colors.windowBackground};
    border-radius: ${scale.xl};
    opacity: 0;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    ${shadow}
`;

const CurrentWeatherContainer = styled.div`
    background-color: ${colors.white};
    border-top-left-radius: ${scale.xl};
    border-bottom-left-radius: ${scale.xl};
`;

const App = () => {
    const [appLoad, setAppLoad] = useState<boolean>(false);

    useEffect(() => {
        setAppLoad(true);
    }, []);

    return (
        <AppContainer>
            <ViewArea animate={{ opacity: appLoad ? 1 : 0 }}>
                <CurrentWeatherContainer></CurrentWeatherContainer>
                <div></div>
            </ViewArea>
        </AppContainer>
    );
};
export default App;
