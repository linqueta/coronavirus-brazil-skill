payload = `
AC	3	0
AL	1	1
AP	0	0
AM	2	1
BA	28	3
CE	11	5
DF	34	22
ES	11	1
GO	12	6
MA	0	0
MT	0	0
MS	6	4
MG	19	7
PA	1	0
PB	1	0
PR	14	6
PE	22	16
PI	0	0
RJ	63	33
RN	1	1
RS	19	10
RO	0	0
RR	0	0
SC	14	7
SP	164	164
SE	6	4
TO	1	0
BR	509	291
`.trim().match(/[^\r\n\t]+/g)

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const prepareg = (element) => { return { region: element[0], ss: parseInt(element[1]), ms: parseInt(element[2]), date: '2020-03-18' } }

chunk(payload, 3).map(prepareg)

