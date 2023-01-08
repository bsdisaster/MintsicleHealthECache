using System;
using System.Collections.Generic;

namespace IdenityService.Data.DTOs.Requests
{
	public class Patient
	{
		public Patient()
		{

		}
		public long Id { get; set; }
		public string MedicalRecordNumber { get; set; }
		public DateTime DOB { get; set; }
		public string  FirstName { get; set; }
		public string LastName { get; set; }
		public string Middle { get; set; }
		public string Race { get; set; }
		public string Ethnicity { get; set; }
		public string Address1 { get; set; }
		public string City { get; set; }
		public string State { get; set; }
		public string Zip { get; set; }
        public List<AdmissionEncounter> AdmissionEncounters { get; set; }

    }

    public class AdmissionEncounter
	{
		public AdmissionEncounter()
		{

		}
		public long Id { get; set; }
		public int PatientId { get; set; }
		public string AccountNumber { get; set; }
		public DateTime EncounterStart  { get; set; }
		public DateTime EncounterEnd { get; set; }
		public string Reason { get; set; }
		public string Diagnosis1 { get; set; }
        public string Diagnosis4 { get; set; }
        public string Diagnosis5 { get; set; }
        public string Diagnosis6 { get; set; }
		public string Physician { get; set; }
		public List<VitalSign> VitalSigns { get; set; }
        public List<Problem> Problems { get; set; }
        public List<Triage> Triages { get; set; }
        public List<Document> Documents { get; set; }
        public List<OrderResult> OrderResults { get; set; }


    }

    public class VitalSign
	{
		public long Id { get; set; }
		public DateTime CreatedAt { get; set; }
		public int Systolic { get; set; }
		public int Diastolic { get; set; }
		public string BP { get; set; }
		public int Pain { get; set; }
	}

    public class Problem
    {
        public long Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime OnsetDate { get; set; }
        public string ProblemDescription { get; set; }

    }
    public class Triage
    {
        public long Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Note { get; set; }

    }
    public class Document
    {
        public long Id { get; set; }
        public DateTime CreatedAt { get; set; }
		public string DocumentDescription { get; set; }
		public string Path { get; set; }

    }
    public class OrderResult
    {
        public long Id { get; set; }
        public DateTime OrderDate { get; set; }
		public DateTime ResultDate { get; set; }
		public string ResultValue { get; set; }

    }

	public class SeachCriteria
	{
        public DateTime DOB { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AccountNumber { get; set; }
        public string MedicalRecordNumber { get; set; }


    }

}

