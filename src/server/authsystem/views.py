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