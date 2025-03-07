import { ListeningContentdivStyle, ListeningContentStyle, ListeningContentULStyle, ListeningLowerDivStyle, ListeningMainDivStyle, ListeningUpperDivStyle } from '@shared/styled/ListeningandPicking';
import React from 'react';
import { HiSpeakerWave } from "react-icons/hi2";


const ListeningAndPicking = () => {
    return (
        <ListeningMainDivStyle>
            <ListeningUpperDivStyle>
                <h1>Listen to the sound and pick the right word!</h1>
                <ListeningContentStyle>
                    <ListeningContentdivStyle>
                        <ListeningContentULStyle>
                            <li><HiSpeakerWave /></li>
                            <li><HiSpeakerWave /></li>
                            <li><HiSpeakerWave /></li>
                        </ListeningContentULStyle>
                    </ListeningContentdivStyle>
                    <ListeningContentdivStyle>
                        <ListeningContentULStyle>
                            <li>Dog</li>
                            <li>Cat</li>
                            <li>Pigeon</li>
                        </ListeningContentULStyle>
                    </ListeningContentdivStyle>
                </ListeningContentStyle>
            </ListeningUpperDivStyle>
            <ListeningLowerDivStyle>
                <button>Next</button>
            </ListeningLowerDivStyle>
        </ListeningMainDivStyle>
    );
};

export default ListeningAndPicking;