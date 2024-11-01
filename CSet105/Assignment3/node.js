/*
This function is a remake of the method toUpperCase()
*/
function toHigh(string)
{
  let low="abcdefghijklmnopqrstuvwxyz";
  let high="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let end="";
  for(let i = 0;i<string.length;i++)
    {
      if(low.indexOf(string[i])==-1 && high.indexOf(string[i])==-1)
      {
        end+=string[i];
      }
      else if(high.indexOf(string[i])!=-1)
      {
        end+=string[i];
      }
      else
      {
        end+=high[low.indexOf(string[i])];
      }
    }
  return end;
}


/*
This is a method that inverts the case of the element
*/
function invert(string)
{
  let low="abcdefghijklmnopqrstuvwxyz";
  let high="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let end="";
  for(let i = 0;i<string.length;i++)
    {
      if(low.indexOf(string[i])==-1 && high.indexOf(string[i])==-1)
      {
        end+=string[i];
      }
      else if(high.indexOf(string[i])!=-1)
      {
        end+=low[high.indexOf(string[i])];
      }
      else
      {
        end+=high[low.indexOf(string[i])];
      }
    }
  return end;
}