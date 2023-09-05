#include<bits/stdc++.h>
using namespace std;

int main(){
       ios_base::sync_with_stdio(false);cin.tie(NULL);
       int t;
       cin>>t;
       while(t--){
        int n;cin>>n;
        int m;cin>>m;
        int k;cin>>k;
        int H;cin>>H;
        vector<int>heights(n);
        for(int i=0;i<n;i++){
            int x;
            cin>>x;
            heights[i]=abs(H-x);
        }
        int count=0;
        for(auto ele:heights){
            if(ele==0) continue;
            if(ele%k==0){
                int h=ele/k;
                if(h<=m-1){
                    count++;
                }
            }
        }
        cout<<count<<endl;



       }
       return 0;
}