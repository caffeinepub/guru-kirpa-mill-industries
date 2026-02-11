import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Management
  public type UserProfile = {
    name : Text;
  };

  stable let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Inquiry Management
  public type Inquiry = {
    id : Nat;
    submittedBy : Principal;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  stable var inquiries : [Inquiry] = [];
  stable var nextId : Nat = 0;

  public shared ({ caller }) func submitInquiry(email : Text, subject : Text, message : Text) : async () {
    if (email.size() == 0 or subject.size() == 0 or message.size() == 0) {
      Runtime.trap("Please fill in all fields");
    };

    let inquiry : Inquiry = {
      id = nextId;
      submittedBy = caller;
      email;
      subject;
      message;
      timestamp = Time.now();
    };

    inquiries := inquiries.concat([inquiry]);
    nextId += 1;
  };

  public query ({ caller }) func listInquiries() : async [Inquiry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };

    inquiries;
  };
};
