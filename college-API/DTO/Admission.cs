using college_API.Data.Models;

public class Admission
{
    public Student Student { get; set; }
    public Family Family { get; set; }
    public Education Education { get; set; }
    public List<int> SelectedCourses { get; set; }
}
