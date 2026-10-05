int m= matrix.size();
int n= matrix[0].size();
int col0=1;
// first row col ko marker use kro 
// [0][0] dikkat dega to uske liye nyi space allocate kro 

for(int i=0;i<m;i++){
    for(int j=0;j<n;j++){
        if(matrix[i][j]==0){
            matrix[i][0]=0;
            //agar dikkat wala cell hai to usko alag se check kro vrna normal trike se mark kro
            if(j!=0)    matrix[0][j]=0;
            else col0=0;
        }
    }
}
// pehle bache huye(bina marker wale) cells ko kro chnge 
for(int i=1;i<m;i++){
    for(int j=1;j<n;j++){
        if(matrix[i][0]==0|| matrix[0][j]==0){
            martrix[i][j]==0;
        }
    }
}
// fir pehle row wale marker se solve kro 
if(matrix[0][0]==0){
    for(int i=0;i<n;i++)    matrix[0][i]=0;
}
//fir column wale se solve kro 
if(col0==0){
    for(int i=0;i<m;i++)    matrix[i][0]=0;
}

return matrix;
