function isAnagram (str1, str2)
{

  let n1 = str1.length, n2 = str2.length;

  if (n1 !== n2)
  {
    return false;
  }

  let s1 = str1.toLowerCase().split("").sort().join("");
  let s2 = str2.toLowerCase().split("").sort().join("");
  // console.log(s2, s1);


  for (let i = 0; i < n1; i++)
  {
    if (s1[i] !== s2[i])
    {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram