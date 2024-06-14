import React, { useState } from "react";
import { Button, Card, CardContent, Typography, TextField, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Nav from "./Nav";
const CommunityPage = () => {
  const [joined, setJoined] = useState(false);
  const [interactions, setInteractions] = useState([]);
  const [newInteractionTitle, setNewInteractionTitle] = useState("");
  const [newInteractionDescription, setNewInteractionDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDefaultModal, setShowDefaultModal] = useState(false);

  const petQueries = [
    "How to groom a long-haired cat?",
    "Best diet for a diabetic dog?",
    "How to introduce a new pet to existing pets?",
    "Tips for dealing with pet anxiety during fireworks?",
    "How to keep your pet entertained while you're at work?",
  ];

  const petAssistance = [
    "Looking for a reliable pet sitter for my dog",
    "Advice on choosing the right pet insurance",
    "Recommendations for pet-friendly hotels for vacation",
    "Help! My cat is scratching the furniture",
    "How to manage shedding in pets?",
  ];

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDefaultModalOpen = () => {
    setShowDefaultModal(true);
  };

  const handleDefaultModalClose = () => {
    setShowDefaultModal(false);
  };

  const joinCommunity = () => {
    setJoined(true);
    const initialInteractions = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      title: petQueries[Math.floor(Math.random() * petQueries.length)],
      description: petAssistance[Math.floor(Math.random() * petAssistance.length)],
    }));
    setInteractions(initialInteractions);
  };

  const addInteraction = () => {
    if (newInteractionTitle && newInteractionDescription) {
      const newInteraction = {
        id: interactions.length,
        title: newInteractionTitle,
        description: newInteractionDescription,
        isNew: true,
      };
      setInteractions([...interactions, newInteraction]);
      setNewInteractionTitle("");
      setNewInteractionDescription("");
      setShowModal(false);
    }
  };

  const deleteInteraction = (id) => {
    const updatedInteractions = interactions.filter(
      (interaction) => interaction.id !== id || interaction.isNew
    );
    setInteractions(updatedInteractions);
  };

  return (
    <div>
      <div><Nav/></div>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-4xl mt-10 bg-white shadow-md rounded-lg ">
        <h1 className="text-3xl pt-2 pb-2 font-semibold ">Welcome to the Pet Community!</h1>
        {!joined ? (
          <Button
            variant="contained"
            onClick={joinCommunity}
            className="w-full mb-6"
            style={{ backgroundColor: "#854d0e", transition: "background-color 0.3s" }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#a16207")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#854d0e")}
          >
            Join the Community
          </Button>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-6">
              {interactions.map((interaction) => (
                <Card key={interaction.id} className="w-full">
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {interaction.title}
                    </Typography>
                    <Typography color="textSecondary">
                      {interaction.description}
                    </Typography>
                  </CardContent>
                  {interaction.isNew && (
                    <Button
                      onClick={() => deleteInteraction(interaction.id)}
                      className="m-2"
                      style={{ color: "red", backgroundColor: "transparent" }}
                    >
                      <DeleteIcon />
                    </Button>
                  )}
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button
                variant="contained"
                className="w-full"
                onClick={handleModalOpen}
                style={{ backgroundColor: "#854d0e", transition: "background-color 0.3s" }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#a16207")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#854d0e")}
              >
                Add Interaction
              </Button>
            </div>
          </>
        )}
      </div>
      <Modal open={showModal} onClose={handleModalClose}>
        <div className="modal-container text-center bg-white mt-20 m-auto p-6 max-w-lg w-full">
          <h2>Add New Interaction</h2>
          <TextField
            label="Title"
            fullWidth
            value={newInteractionTitle}
            onChange={(e) => setNewInteractionTitle(e.target.value)}
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={newInteractionDescription}
            onChange={(e) => setNewInteractionDescription(e.target.value)}
            variant="outlined"
            margin="normal"
          />
          <Button
            variant="contained"
            onClick={addInteraction}
            style={{ backgroundColor: "#854d0e", transition: "background-color 0.3s" }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#a16207")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#854d0e")}
          >
            Add
          </Button>
        </div>
      </Modal>
      <Modal open={showDefaultModal} onClose={handleDefaultModalClose}>
        <div className="modal-container text-center bg-white p-6 max-w-md mx-auto">
          <h2>Title of Default Interaction</h2>
          <Typography variant="body1">Description of Default Interaction</Typography>
        </div>
      </Modal>
    </div>
    </div>
  );
};

export default CommunityPage;
