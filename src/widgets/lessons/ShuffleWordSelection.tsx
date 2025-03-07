import { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import styled from "styled-components"; 
import { ButtonStyled } from "@shared/styled/ShuffleWordSelection"; 
import VectorPic from '@shared/Images/vector1.png'; // Assuming you want to keep this
import BlankThinking from '@shared/Images/thinking2.png' // Importing the thinking image

const persianSentence = "سلام نام من احمد است"; // Persian Sentence
const correctEnglishTranslation = "Hi my name is Ahmad and yours name"; // Correct English Translation

// Add unique identifiers to repeated words
const words = correctEnglishTranslation
  .split(" ")
  .map((word, index) => `${word}_${index}`);  // Adding index to each word

const Container = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const Word = styled.div`
  padding: 10px 16px;
  border: 2px solid #4caf50;
  background: #f9f9f9;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e3f2e1;
    transform: scale(1.05);
  }

  &:active {
    background-color: #d2e9d2;
    transform: scale(1);
  }
`;

const DropArea = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  border: 2px dashed #4caf50;
  padding: 20px;
  min-height: 80px;
  background-color: #f1f8f6;
  border-radius: 10px;
  justify-content: center;
  flex-wrap: wrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e8f5e9;
  }
`;

const StyledText = styled.p<{ size?: string; fw?: number; align?: string; color?: string; margin?: string }>`
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.fw || 400};
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || "#333"};
  margin: ${(props) => props.margin || "0"};
`;

// New Styled Component for the "Thinking" Area
const ThinkingSpeechDiv = styled.div`
    display:flex;
    
`;

const BlankThinkingDiv = styled.div`
    width:30rem;
    height:15rem;
    border:2px solid red;
    overflow:hidden;
    position:relative;
    & img{
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
    }
`;

const SentenceContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 15px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  width: 100%;
  height: 100%;
  z-index:10;
`;

function shuffleArray(array: string[]): string[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export function SentenceBuilder() {
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [userWords, setUserWords] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    const shuffled = shuffleArray(words);
    setShuffledWords(shuffled);
  }, []);

  const handleDragEnd = ({ source, destination }: { source: { index: number; droppableId: string }; destination: { index: number; droppableId: string } | null }) => {
    if (!destination) return;

    // Handle moving word within shuffled words
    if (source.droppableId === "shuffledWords" && destination.droppableId === "shuffledWords") {
      const reorderedShuffledWords = [...shuffledWords];
      const [removed] = reorderedShuffledWords.splice(source.index, 1);
      reorderedShuffledWords.splice(destination.index, 0, removed);
      setShuffledWords(reorderedShuffledWords);
    }

    // Handle moving word to the user words area
    if (source.droppableId === "shuffledWords" && destination.droppableId === "userWords") {
      const newUserWords = [...userWords];
      const movedWord = shuffledWords[source.index];
      shuffledWords.splice(source.index, 1);
      newUserWords.splice(destination.index, 0, movedWord);
      setUserWords(newUserWords);
      setShuffledWords([...shuffledWords]);
    }

    // Handle moving word back to the shuffled words area from the user words area
    if (source.droppableId === "userWords" && destination.droppableId === "shuffledWords") {
      const newShuffledWords = [...shuffledWords];
      const movedWord = userWords[source.index];
      userWords.splice(source.index, 1);
      newShuffledWords.splice(destination.index, 0, movedWord);
      setUserWords([...userWords]);
      setShuffledWords(newShuffledWords);
    }

    // Handle rearranging words within the user's arrangement
    if (source.droppableId === "userWords" && destination.droppableId === "userWords") {
      const reorderedUserWords = [...userWords];
      const [removed] = reorderedUserWords.splice(source.index, 1);
      reorderedUserWords.splice(destination.index, 0, removed);
      setUserWords(reorderedUserWords);
    }
  };

  const checkAnswer = () => {
    const originalWords = correctEnglishTranslation.split(" ");
    const userWordsWithoutIndex = userWords.map((w) => w.split("_")[0]); // Remove the index part for checking
    const isSentenceCorrect = userWordsWithoutIndex.join(" ") === originalWords.join(" ");
    setIsCorrect(isSentenceCorrect);
  };

  const handleWordClick = (word: string) => {
    const wordWithoutIndex = word.split("_")[0]; // Remove the index part
    const isInUserWords = userWords.includes(word);

    if (isInUserWords) {
      // If the word is already in userWords, remove it and add back to shuffledWords
      const newUserWords = userWords.filter((w) => w !== word);
      const newShuffledWords = [...shuffledWords];
      newShuffledWords.push(word);
      setUserWords(newUserWords);
      setShuffledWords(newShuffledWords);
    } else {
      // If the word is not in userWords, add it
      const newShuffledWords = shuffledWords.filter((w) => w !== word);
      const newUserWords = [...userWords, word];
      setShuffledWords(newShuffledWords);
      setUserWords(newUserWords);
    }
  };

  return (
    <div>
      {/* Thinking Section with Persian Sentence */}
      {/* <ThinkingSpeechDiv>
        <div><img src={VectorPic} alt="cartoon character" /></div>
        <BlankThinkingDiv>
            <img src={BlankThinking} alt="blank thinking empty speech" />
        </BlankThinkingDiv>
      </ThinkingSpeechDiv> */}
            <SentenceContainer>{persianSentence}</SentenceContainer>
      
        
      

      {/* Drag and Drop Section */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="shuffledWords" direction="horizontal">
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {shuffledWords.map((word, index) => (
                <Draggable key={word} draggableId={word} index={index}>
                  {(provided) => (
                    <Word
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={() => handleWordClick(word)}
                    >
                      {word.split("_")[0]} {/* Display the word without index */}
                    </Word>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>

        {/* User's Droppable Area for Arranged Words */}
        <Droppable droppableId="userWords" direction="horizontal">
          {(provided) => (
            <DropArea {...provided.droppableProps} ref={provided.innerRef}>
              {userWords.map((word, index) => (
                <Draggable key={word} draggableId={word} index={index}>
                  {(provided) => (
                    <Word
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={() => handleWordClick(word)}
                    >
                      {word.split("_")[0]} {/* Display the word without index */}
                    </Word>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </DropArea>
          )}
        </Droppable>
      </DragDropContext>

      <ButtonStyled onClick={checkAnswer}>Check Answer</ButtonStyled>
      {isCorrect !== null && (
        <StyledText color={isCorrect ? "green" : "red"} size="20px" align="center" margin="20px 0">
          {isCorrect ? "Correct!" : "Try Again."}
        </StyledText>
      )}
    </div>
  );
}
