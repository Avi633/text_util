#include<bits/stdc++.h>
using namespace std;

int main(){
       ios_base::sync_with_stdio(false);cin.tie(NULL);
       int t;cin>>t;
       while(t--){
        int n;cin>>n;

        vector<int>v(n);
        for(int i=0;i<n;i++){
            int x;
            cin>>x;
            v[i]=x;
        }
        priority_queue<int,vector<int>,greater<int>>pq;
        for(auto ele:v){
            pq.push(ele);
        }
        bool f1=0;
        for(auto ele:v){
          if(ele%2!=pq.top()%2){
             cout<<"NO"<<endl;
             f1=1;
             break;

          }
          pq.pop();
        }
        if(f1==0) cout<<"YES"<<endl;

        
       }
       return 0;
}