import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";
import { useStore } from "../store";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import dayjs from "dayjs";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useStore();

  const project = state.projects.find((p) => p.id === id);

  const [form, setForm] = useState({
    ...project,
    startDate: dayjs(project.startDate),
    endDate: dayjs(project.endDate),
  });

  useEffect(() => {
    if (project) {
      setForm({
        ...project,
        startDate: dayjs(project.startDate),
        endDate: dayjs(project.endDate),
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProject = {
      ...form,
      startDate: form.startDate.format("YYYY-MM-DD"),
      endDate: form.endDate.format("YYYY-MM-DD"),
    };
    dispatch({ type: "UPDATE_PROJECT", payload: updatedProject });
    navigate("/");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="p-5 max-w-[960px] mt-14"
      >
        <TextField
          fullWidth
          label="Project ID"
          value={form.id}
          InputProps={{ readOnly: true }}
          margin="normal"
        />
        <TextField
          fullWidth
          name="name"
          label="Project Name"
          value={form.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="description"
          label="Description"
          value={form.description}
          onChange={handleChange}
          multiline
          margin="normal"
        />
        <DateField
          label="Start Date"
          name="startDate"
          fullWidth
          clearable
          value={form.startDate}
          onChange={(newValue) => handleDateChange("startDate", newValue)}
          margin="normal"
        />
        <DateField
          label="End Date"
          name="endDate"
          fullWidth
          clearable
          value={form.endDate}
          onChange={(newValue) => handleDateChange("endDate", newValue)}
          margin="normal"
        />
        <TextField
          fullWidth
          name="manager"
          label="Project Manager"
          value={form.manager}
          onChange={handleChange}
          margin="normal"
        />
        <div className="mt-6 ml-4">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Update
          </Button>
        </div>
      </Box>
    </LocalizationProvider>
  );
};

export default ProjectDetailPage;
