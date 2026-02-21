import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    details: {
      type: String
    }
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);