import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Box, IconButton, Flex } from "@chakra-ui/react";
import { FaThumbsUp, FaLaugh, FaHeart } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim() !== "") {
      setPosts([...posts, { text: newPost, reactions: { like: 0, laugh: 0, love: 0 } }]);
      setNewPost("");
    }
  };

  const addReaction = (index, reaction) => {
    const updatedPosts = [...posts];
    updatedPosts[index].reactions[reaction]++;
    setPosts(updatedPosts);
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex as="nav" w="100%" p={4} bg="blue.500" color="white" justifyContent="center" mb={4}>
        <Text fontSize="xl" fontWeight="bold">Public Postboard</Text>
      </Flex>
      <VStack spacing={4} align="stretch">
        <Box>
          <Input
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            mb={2}
          />
          <Button colorScheme="blue" onClick={addPost}>Post</Button>
        </Box>
        {posts.map((post, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
            <Text mb={2}>{post.text}</Text>
            <HStack spacing={4}>
              <IconButton
                aria-label="Like"
                icon={<FaThumbsUp />}
                onClick={() => addReaction(index, "like")}
              />
              <Text>{post.reactions.like}</Text>
              <IconButton
                aria-label="Laugh"
                icon={<FaLaugh />}
                onClick={() => addReaction(index, "laugh")}
              />
              <Text>{post.reactions.laugh}</Text>
              <IconButton
                aria-label="Love"
                icon={<FaHeart />}
                onClick={() => addReaction(index, "love")}
              />
              <Text>{post.reactions.love}</Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;