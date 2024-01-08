from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .backend import JWTAuthClass

from .serializers import UserPresentationSerializer, UserRegisterSerializer

class RegisterAPIView(GenericAPIView):
    serializer_class = UserRegisterSerializer
    permission_classes = (AllowAny, )
    presentation_serializer = UserPresentationSerializer

    def post(self, request) -> Response:
        response, status_code = JWTAuthClass.register(request, self.serializer_class, self.presentation_serializer)
        return Response(response, status_code)


class SupportAPIView(GenericAPIView):
    serializer_class = UserRegisterSerializer
    permission_classes = (AllowAny, )
    presentation_serializer = UserPresentationSerializer

    def get(self, request) -> Response:
        auth_class = JWTAuthClass()
        user, success = auth_class.authenticate(request)

        if success:
            return Response(self.presentation_serializer(user).data, 200)
        
        return Response({"detail": "Invalid data"}, 404)
