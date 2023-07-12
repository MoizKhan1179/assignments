SELECT * FROM info2.coursedetails1;
SELECT * FROM info2.coursedetails1
JOIN CourseDetails1 ON StdInfo1.StudentId = CourseDetails1.StudentId
JOIN tdeatails1 ON CourseDetails1.CourseId = tdeatails1.CourseId;

SELECT * FROM info2.StdInfo1
JOIN CourseDetails1 ON StdInfo1.StudentId = CourseDetails1.StudentId
JOIN TDeatails1 ON CourseDetails1.CourseId = TDeatails1.CourseId
WHERE CourseDetails1.CourseName = 'ASP.NET';

SELECT * FROM info2.StdInfo1
CROSS JOIN CourseDetails1
CROSS JOIN TDeatails1;

SELECT * FROM info2.StdInfo1
LEFT JOIN CourseDetails1 ON StdInfo1.StudentId = CourseDetails1.StudentId
LEFT JOIN TDeatails1 ON CourseDetails1.CourseId = TDeatails1.CourseId;

SELECT * FROM info2.StdInfo1
RIGHT JOIN CourseDetails1 ON StdInfo1.StudentId = CourseDetails1.StudentId
RIGHT JOIN TDeatails1 ON CourseDetails1.CourseId = TDeatails1.CourseId;

SELECT * FROM info2.StdInfo1
INNER JOIN CourseDetails1 ON StdInfo1.StudentId = CourseDetails1.StudentId
INNER JOIN TDetails1 ON CourseDetails1.CourseId = TDetails1.CourseId;
