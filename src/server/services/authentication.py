from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

class UserAuthentication:
    def __init__(self, request, serializer, presentaiton_serializer=None, **kwargs) -> None:

        self.request = request
        self.serializer = serializer
        self.presentaiton_serializer = presentaiton_serializer 
        
    def register(self,):
        data = self.serializer(data=self.request.data)
        if data.is_valid():
            user = data.save()
            return self._serialize_user(user, self.presentaiton_serializer)

        return data.errors, status.HTTP_400_BAD_REQUEST

    
    def _serialize_user(self, user, serializer):
        return {**dict(serializer(user).data)}, status.HTTP_200_OK
