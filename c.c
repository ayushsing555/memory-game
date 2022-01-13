#include<stdio.h>
main()
{
    int T;
    scanf("%d",&T);
    while(T--){
        int A1,A2,B1,B2,C1,C2;
        scanf("%d%d",&A1,&A2);
        scanf("%d%d",&B1,&B2);
        scanf("%d%d",&C1,&C2);
        if((A1+A2)>(B1+B2))
        {
            if((A1+A2)>(C1+C2))
              printf("%d",(A1+A2));
            else
               printf("%d",(C1+C2));
        }
        else{
            if((B1+B2)>(C1+C2))
              printf("%d",(B1+B2));
            else
              printf("%d",(C1+C2));
        }
    }
}