#include<bits/stdc++.h>
using namespace std;

int main(){
       ios_base::sync_with_stdio(false);cin.tie(NULL);
       int t;cin>>t;
       while(t--){
              int n,k;
              cin>>n>>k;
              vector<int>v;
              int d=0;
              for(int i=0;i<n;i++){
                     int x;cin>>x;
                     v.push_back(x);
                     
              }
              for(int i=0;i<n;i++){
                 if(v[i]==v[0]){
                     d++;
                     if(d==k) break;
                 }
              }
              if(v[0]==v[n-1]&&d==k){
                     cout<<"YES"<<endl;
              }else{
              int count=0;
              int a=0;
       
              for(int i=0;i<n;i++){
                 if(v[i]==v[0]){
                     count++;
                     a=i;
                     if(count==k) break;
                 }
              }
              int j=0;
              int count1=0;
              for(int i=n-1;i>=0;i--){
                 if(v[i]==v[n-1]){
                     count1++;
                     j=i;
                     if(count1==k) break;
                 }
              }
              if(a<j&&count==k&&count1==k)cout<<"YES"<<endl;
              else cout<<"NO"<<endl;
              }
             
       }
       return 0;
}